import React from "react";

const io = require('socket.io-client');

export default function DebMeet() {
  const joinSocket = () => {
    const socket = io('http://localhost:3060');
  }
  return (
    <div className="flex-1 flex flex-col w-full mx-auto">
      <div className="py-24">
        <h1 className="text-5xl md:text-6xl font-bold text-center">Active <span className="text-indigo-400">Channels</span></h1>
        <button className="z-50 mx-auto py-2 px-6 bg-indigo-400 hover:bg-indigo-500 rounded font-semibold text-lg" onClick={joinSocket}>Join <i className="fal fa-long-arrow-right ml-3 translate-y-px"></i></button>
      </div>
    </div>
  );
}