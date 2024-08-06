import React, { useState } from "react";
import { stringify } from "viem";

const tokens = [
  {
    name: "Base",
    logo: "/public/icons/base.png",
    token: "ETH",
  },
  {
    name: "Edutoken",
    logo: "/public/icons/edutoken.png",
    token: "WETH",
  },
  {
    name: "Ethereum",
    logo: "/public/icons/eth.png",
    token: "ETH",
  },
  {
    name: "Fraxtal",
    logo: "/public/icons/fraxtal.webp",
    token: "frxETH",
  },
  {
    name: "Optimism",
    logo: "/public/icons/optimism.png",
    token: "oETH",
  },
];

type Token = {
  name: string;
  logo: string;
  token: string;
} | null;

export default function CreateSurveyForm() {
  const [token, settoken] = useState<Token>(null);
  const [amount, setAmount] = useState<number>(0);
  const [entries, setEntries] = useState<number>(1);

  return (
    <div className="pt-36 pb-16 p-page bg-gradient-to-r from-primary to-secondary">
      <figure className="absolute-cover bg-gradient-to-b from-transparent to-background" />

      <div className="flex flex-col gap-y-6 z-10 relative w-1/3">
        <div className="">
          <h1 className="text-md">Name of the survey</h1>
          <input className="w-full py-1 px-2 rounded-md" />
        </div>

        <div className="">
          <h1 className="text-md">Description for the survey</h1>
          <textarea
            className="w-full py-1 px-2 rounded-md focus-within:outline-none"
            minLength={5}
          />
        </div>

        <div className="">
          <h1 className="text-md">Token Type for the survey</h1>
          <select
            className="w-full py-1 px-2 rounded-md focus-within:outline-none"
            value={token ? token.token : ""}
            onChange={(e) =>
              settoken(
                tokens.find((token) => token.token === e.target.value) || null
              )
            }
          >
            <option value="" disabled>
              Select token
            </option>
            {tokens.map((token) => (
              <option key={token.token} value={token.token}>
                {token.name}
              </option>
            ))}
          </select>
        </div>

        <div className="">
          <h1 className="text-md">Amount in survey</h1>
          <input
            className="w-full py-1 px-2 rounded-md focus-within:outline-none"
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
          />
        </div>

        <div className="">
          <h1 className="text-md">Number of entries</h1>
          <input
            className="w-full py-1 px-2 rounded-md focus-within:outline-none"
            onChange={(e) => setEntries(Number(e.target.value))}
            type="number"
          />
          <div className="bg-primary/10 p-2 rounded-md text-primary mt-2">
            Note: It means, every user who fills the form will get{" "}
            {stringify(amount / entries)} {token?.name} token from the survey pool
          </div>
        </div>
      </div>
    </div>
  );
}
