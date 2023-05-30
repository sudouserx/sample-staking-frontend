import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import stakingAbi from "../src/abi/StakingContract.json";
import tokenAbi from "../src/abi/TokenContract.json";
import NavBar from "./components/NavBar";
import Reward from "./components/Reward";
import Stake from "./components/Stake";
import Unstake from "./components/Unstake";
import Container from "react-bootstrap/Container";

const CONTRACT_ADDRESS = "0xc6323Ff226Cf94CD925206006bF83894d649aBaC";
const TOKEN_ADDRESS = "0x8c83c2642b923025ACfbeE0D4A395658458d19e2";

const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
const SIGNER = PROVIDER.getSigner();
const stakingContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  stakingAbi,
  SIGNER
);
const tokenContract = new ethers.Contract(TOKEN_ADDRESS, tokenAbi, SIGNER);

const App = () => {
  const [account, setAccount] = useState("");
  const [stakeAmount, setStakeAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");
  const [reward, setReward] = useState("");
  const [balance, setBalance] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  var currentReward = 0;

  useEffect(() => {
    const fetchReward = async () => {
      try {
        currentReward = await stakingContract.calculateReward(
          ethers.utils.getAddress(account)
        );
        setReward(ethers.utils.formatEther(currentReward));
      } catch (err) {
        console.log(err);
      }
    };
    fetchReward();
  }, [account]);
  // console.log(reward)

  const handleMint = async () => {
    try {
      const mintTx = await tokenContract.mint(
        ethers.utils.parseEther(tokenAmount.toString())
      );
      await mintTx.wait();
    } catch (error) {
      console.log(error);
    }

    setTokenAmount("");

  }

  const handleClaimReward = async () => {
    try {
      const claimRewardTx = await stakingContract.claimReward();
      await claimRewardTx.wait();

      // Success! Claim reward transaction completed
    } catch (error) {
      // Handle error during claim reward transaction
      console.log(error);
    }
  };

  const handleStake = async () => {
    try {
      const tx = await tokenContract.approve(
        CONTRACT_ADDRESS,
        ethers.utils.parseEther(stakeAmount.toString())
      );
      await tx.wait();

      const stakeTx = await stakingContract.stake(
        ethers.utils.parseEther(stakeAmount.toString())
      );
      await stakeTx.wait();
      // Success! Stake transaction completed
    } catch (error) {
      // Handle error during stake transaction
    }
    setStakeAmount("");
  };

  const handleUnstake = async () => {
    try {
      const unstakeTx = await stakingContract.unstake(
        ethers.utils.parseEther(unstakeAmount.toString())
      );
      await unstakeTx.wait();

      // Success! Unstake transaction completed
    } catch (error) {
      // Handle error during unstake transaction
    }
    setUnstakeAmount("");
  };

  const handleConnect = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      console.log(accounts[0].address);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <NavBar account={account} handleConnect={handleConnect} />
      <Reward reward={reward} handleClaimReward={handleClaimReward} handleMint={handleMint} tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} />
      <Container fluid>
        <Stake
          stakeAmount={stakeAmount}
          setStakeAmount={setStakeAmount}
          handleStake={handleStake}
        />
        <Unstake
          unstakeAmount={unstakeAmount}
          setUnstakeAmount={setUnstakeAmount}
          handleUnstake={handleUnstake}
        />
      </Container>
    </div>
  );
};

export default App;
