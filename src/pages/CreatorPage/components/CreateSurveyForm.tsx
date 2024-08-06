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
    <div className="pt-36 pb-16 p-page  text-white h-screen">
      <figure className="absolute-cover bg-gradient-to-r from-primary via-secondary to-secondary" />
      <figure className="absolute-cover bg-gradient-to-b from-transparent to-background" />

      <div className="flex flex-col gap-y-6 relative w-1/2 rounded-xl p-6 bg-back">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Create Survey Form
        </h2>

        <input
          className="text-front w-full py-1 px-2 bg-transparent border-b border-front/20"
          placeholder="Name of the Survey"
        />
        <textarea
          className="text-front w-full py-1 px-2 bg-transparent border-b border-front/20 focus-within:outline-none"
          placeholder="Description for the Survey"
          minLength={5}
        />
        <select
          className="text-front w-full py-1 px-2 bg-transparent border-b border-front/20"
          value={token ? token.token : ""}
          onChange={(e) =>
            settoken(
              tokens.find((token) => token.token === e.target.value) || null
            )
          }
        >
          <option value="" disabled className="">
            Select token
          </option>
          {tokens.map((token) => (
            <option key={token.token} value={token.token}>
              {token.name}
            </option>
          ))}
        </select>

        <input
          className="text-front w-full py-1 px-2 bg-transparent border-b border-front/20"
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount for the Survey"
          type="number"
        />

        <div>
          <input
            className="text-front w-full py-1 px-2 bg-transparent border-b border-front/20"
            placeholder="Number of Entries"
            onChange={(e) => setEntries(Number(e.target.value))}
            type="number"
          />
          <div className="bg-primary/50 p-2 rounded-md text-back mt-2">
            Note: It means, every user who fills the form will get{" "}
            {stringify(amount / entries)} {token?.name} token from the survey
            pool
          </div>
        </div>
        <button className="w-max self-end px-4 py-2 text-front bg-gradient-to-r from-primary/40 to-secondary/40 rounded-md">
          Create Form
        </button>
      </div>
    </div>
  );
}
