import React from "react";

export const IndianPlayers = [
  "Sachin1",
  "Dhoni2",
  "Virat3",
  "Rohit4",
  "Yuvaraj5",
  "Raina6",
];

export function OddPlayers([first, second, third, fourth, fifth]) {
  return (
    <div>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

export function EvenPlayers([first, second, third, fourth, fifth, sixth]) {
  return (
    <div>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

const T20Players = [
  "First Player",
  "Second Player",
  "Third Player",
];

const RanjiTrophyPlayers = [
  "Fourth Player",
  "Fifth Player",
  "Sixth Player",
];

export const mergedPlayers = [
  ...T20Players,
  ...RanjiTrophyPlayers,
];

export function ListofIndianPlayers() {
  return (
    <ul>
      {mergedPlayers.map((item, index) => (
        <li key={index}>Mr. {item}</li>
      ))}
    </ul>
  );
}