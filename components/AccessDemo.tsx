"use client";

import { useState } from "react";

type Who = "intern" | "eng" | "hr" | "contractor";
type What = "wiki" | "prod" | "payroll";

const whoOptions: { value: Who; label: string }[] = [
  { value: "intern", label: "Intern" },
  { value: "eng", label: "Engineer" },
  { value: "hr", label: "HR manager" },
  { value: "contractor", label: "Contractor" },
];

const whatOptions: { value: What; label: string }[] = [
  { value: "wiki", label: "Team wiki" },
  { value: "prod", label: "Production console" },
  { value: "payroll", label: "Payroll data" },
];

// Edit these rules to change the demo policy.
const rules: Record<
  What,
  { requiresMfa: boolean; roles: Who[]; reason: string }
> = {
  wiki: {
    requiresMfa: false,
    roles: ["intern", "eng", "hr", "contractor"],
    reason: "The wiki is open to every signed-in identity.",
  },
  prod: {
    requiresMfa: true,
    roles: ["eng"],
    reason: "Only engineers may reach production.",
  },
  payroll: {
    requiresMfa: true,
    roles: ["hr"],
    reason: "Only HR may read payroll data.",
  },
};

function decide(who: Who, what: What, mfa: boolean) {
  const rule = rules[what];
  const label = whoOptions.find((o) => o.value === who)!.label;

  if (!rule.roles.includes(who)) {
    return {
      allowed: false,
      why: `${label} has no role that grants this. ${rule.reason}`,
    };
  }
  if (rule.requiresMfa && !mfa) {
    return {
      allowed: false,
      why: "Role matches, but this resource requires a multi-factor check first.",
    };
  }
  return {
    allowed: true,
    why: rule.requiresMfa
      ? "Role matches and multi-factor passed."
      : `Role matches. ${rule.reason}`,
  };
}

export default function AccessDemo() {
  const [who, setWho] = useState<Who>("intern");
  const [what, setWhat] = useState<What>("wiki");
  const [mfa, setMfa] = useState(false);

  const { allowed, why } = decide(who, what, mfa);

  return (
    <div className="panel" role="group" aria-labelledby="demo-title">
      <h2 id="demo-title">Try an access decision</h2>
      <small>Pick who is asking and what they want. The policy answers.</small>

      <fieldset>
        <legend>Who</legend>
        <div className="opts">
          {whoOptions.map((o) => (
            <label key={o.value}>
              <input
                type="radio"
                name="who"
                value={o.value}
                checked={who === o.value}
                onChange={() => setWho(o.value)}
              />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Wants to open</legend>
        <div className="opts">
          {whatOptions.map((o) => (
            <label key={o.value}>
              <input
                type="radio"
                name="what"
                value={o.value}
                checked={what === o.value}
                onChange={() => setWhat(o.value)}
              />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mfa">
        <input
          type="checkbox"
          checked={mfa}
          onChange={(e) => setMfa(e.target.checked)}
        />
        Passed multi-factor check
      </label>

      <div
        className={`verdict ${allowed ? "allow" : "deny"}`}
        role="status"
        aria-live="polite"
      >
        <strong>{allowed ? "Allowed" : "Denied"}</strong>
        <span>{why}</span>
      </div>
    </div>
  );
}
