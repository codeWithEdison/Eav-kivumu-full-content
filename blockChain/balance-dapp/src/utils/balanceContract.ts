import { BrowserProvider, Contract, ethers } from "ethers";

const CONTRACT_ADDRESS = "0x632a1C719a52a20a5E1A6C91eeDEe8f81cceB3Ac";

const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

declare global {
    interface Window {
        ethereum?: any;
    }
}

export const getBalanceContract = async (): Promise<{ contract: Contract, userAddress: string } | null> => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const userAddress = await signer.getAddress();
            return { 
                contract: new Contract(CONTRACT_ADDRESS, ABI, signer),
                userAddress
            };
        } catch (error) {
            console.error("Failed to get balance contract", error);
            throw new Error("Failed to connect to Ethereum wallet. Please make sure MetaMask is unlocked and try again.");
        }
    } else {
        throw new Error("Ethereum object not found. Please install MetaMask.");
    }
};

export const getContractBalance = async (contract: Contract): Promise<string> => {
    try {
        const balance = await contract.getBalance();
        return ethers.formatEther(balance);
    } catch (error: any) {
        console.error("Error fetching balance using getBalance():", error);
        
        try {
            const provider = contract.runner?.provider;
            if (provider) {
                const balance = await provider.getBalance(CONTRACT_ADDRESS);
                return ethers.formatEther(balance);
            }
        } catch (fallbackError) {
            console.error("Error fetching balance using fallback method:", fallbackError);
        }
        
        throw new Error(`Failed to get balance: ${error.message}`);
    }
};

export const getUserBalance = async (provider: ethers.Provider, address: string): Promise<string> => {
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
};

export const deposit = async (contract: Contract, amount: string): Promise<void> => {
    const tx = await contract.deposit(ethers.parseEther(amount), { value: ethers.parseEther(amount) });
    await tx.wait();
};

export const withdraw = async (contract: Contract, amount: string): Promise<void> => {
    const tx = await contract.withdraw(ethers.parseEther(amount));
    await tx.wait();
};

export const formatBalance = (balance: ethers.BigNumberish): string => {
    return ethers.formatEther(balance);
};