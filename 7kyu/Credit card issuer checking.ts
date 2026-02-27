/*
Description

Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card 
issuer for a given card number. If the number cannot be matched then the function should return 
the string Unknown.

Where Issuer is defined with the following enum type.

enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}

enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}
import {Issuer} from "./preloaded";
export const getIssuer = (x: number): Issuer => {};
*/

import { Issuer } from "./preloaded";

export const getIssuer = (x: number): Issuer => {
  const card = x.toString();
  const length = card.length;

  if (card.startsWith("4") && (length === 13 || length === 16)) {
    return Issuer.VISA;
  }

  if ((card.startsWith("34") || card.startsWith("37")) && length === 15) {
    return Issuer.AMEX;
  }

  const firstTwo = parseInt(card.slice(0, 2), 10);
  if (firstTwo >= 51 && firstTwo <= 55 && length === 16) {
    return Issuer.Mastercard;
  }

  if (card.startsWith("6011") && length === 16) {
    return Issuer.Discover;
  }

  return Issuer.Unknown;
};
