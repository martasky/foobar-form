import RestrictedInput from "restricted-input";

export const formattedCreditCardInput = new RestrictedInput({
  element: document.querySelector("#card_number"),
  pattern: "{{9999}} {{9999}} {{9999}} {{9999}}",
});

export const formattedExpiry = new RestrictedInput({
  element: document.querySelector("#expiration"),
  pattern: "{{99}}/{{99}}",
});
export const formattedCVW = new RestrictedInput({
  element: document.querySelector("#cvw"),
  pattern: "{{999}}",
});
