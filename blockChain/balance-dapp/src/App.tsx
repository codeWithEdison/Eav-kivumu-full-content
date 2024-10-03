import React, { useState, useEffect } from 'react';
import { WalletIcon, ArrowUpCircleIcon, ArrowDownCircleIcon, ActivityIcon } from 'lucide-react';
import { getBalanceContract, getContractBalance, getUserBalance, deposit, withdraw, formatBalance } from './utils/balanceContract';
import { Contract } from 'ethers';

export default function App() {
  const [amount, setAmount] = useState<string>('');
  const [contractBalance, setContractBalance] = useState<string>('0');
  const [userBalance, setUserBalance] = useState<string>('0');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);
  const [userAddress, setUserAddress] = useState<string | null>(null);

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    try {
      const result = await getBalanceContract();
      if (result) {
        setContract(result.contract);
        setUserAddress(result.userAddress);
        setIsConnected(true);
        setError(null);
        await fetchBalances(result.contract, result.userAddress);
      }
    } catch (err: any) {
      console.error("Failed to connect", err);
      setError(`Failed to connect: ${err.message}`);
    }
  };

  const fetchBalances = async (contractInstance: Contract, address: string) => {
    try {
      const contractBal = await getContractBalance(contractInstance);
      setContractBalance(contractBal);

      const userBal = await getUserBalance(contractInstance.runner!.provider!, address);
      setUserBalance(userBal);

      if (parseFloat(userBal) < 0.01) {
        setWarning("Your account balance is low. You may not be able to perform transactions due to gas fees.");
      } else {
        setWarning(null);
      }
    } catch (err: any) {
      console.error("Failed to get balances", err);
      setError(`Failed to get balances: ${err.message}`);
    }
  };

  const handleDeposit = async () => {
    if (!contract || !userAddress) return;
    try {
      setError(null);
      if (parseFloat(amount) > parseFloat(userBalance)) {
        setError("Insufficient funds for this deposit.");
        return;
      }
      await deposit(contract, amount);
      await fetchBalances(contract, userAddress);
      setAmount('');
    } catch (err: any) {
      console.error("Failed to deposit", err);
      setError(`Failed to deposit: ${err.message}`);
    }
  };

  const handleWithdraw = async () => {
    if (!contract || !userAddress) return;
    try {
      setError(null);
      if (parseFloat(amount) > parseFloat(contractBalance)) {
        setError("Insufficient contract balance for this withdrawal.");
        return;
      }
      await withdraw(contract, amount);
      await fetchBalances(contract, userAddress);
      setAmount('');
    } catch (err: any) {
      console.error("Failed to withdraw", err);
      setError(`Failed to withdraw: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative backdrop-blur-sm bg-white/10 rounded-3xl shadow-2xl p-1 max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-lg rounded-[22px] p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-2xl">
              <WalletIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold ml-3 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Balance DApp
            </h1>
          </div>

          {isConnected ? (
            <>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-4 transform transition-all hover:scale-105">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-gray-600 text-sm uppercase tracking-wide font-semibold">Contract Balance</h2>
                  <ActivityIcon className="w-5 h-5 text-purple-500 animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-gray-800 flex items-baseline">
                  {contractBalance} <span className="text-sm text-gray-500 ml-2">ETH</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-6 mb-8 transform transition-all hover:scale-105">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-gray-600 text-sm uppercase tracking-wide font-semibold">Your Balance</h2>
                  <ActivityIcon className="w-5 h-5 text-blue-500 animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-gray-800 flex items-baseline">
                  {userBalance} <span className="text-sm text-gray-500 ml-2">ETH</span>
                </div>
              </div> 

              <div className="mb-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter Amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} 
                    className="w-full px-6 py-4 rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all text-lg font-medium placeholder-gray-400"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">
                    ETH
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleDeposit}
                  className="group relative flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 text-white py-4 px-6 rounded-xl hover:shadow-lg transform transition-all hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <ArrowUpCircleIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Deposit</span>
                </button>
                <button 
                  onClick={handleWithdraw} 
                  className="group relative flex items-center justify-center bg-gradient-to-r from-red-400 to-pink-500 text-white py-4 px-6 rounded-xl hover:shadow-lg transform transition-all hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <ArrowDownCircleIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Withdraw</span>
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={connectWallet}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl hover:shadow-lg transform transition-all hover:-translate-y-1"
            >
              Connect Wallet
            </button>
          )}

{error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          {warning && (
            <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Warning:</strong>
              <span className="block sm:inline"> {warning}</span>
            </div>
          )} 
        </div>
      </div>
      
      <footer className="mt-8 text-white/80 text-sm font-medium tracking-wide">
        © Eav_kivumu ™ 2024
      </footer>
    </div>
  );
} 