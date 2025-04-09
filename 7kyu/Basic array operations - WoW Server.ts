/*
Description

Goal:
Your goal is to implement really basic WoW Server.
You have to provide possibility of creation, storing, checking and filtering of new Characters + 
removing characters matching given parameters, you should achieve it by implementing methods of WowServer.

WowServer should be able to:
properly add single Character with given Nickname, Class and ClassSpecialization
add multiple characters
count characters matching filters (if all filters are set to undefined: return count of all existing characters)
check if character with given parameters (filters) already exists (if all filters are set to undefined: return true if 
    there is any character)
find all matching characters for given filters (if all filters are set to undefined: return all existing characters)
return all characters which has been created
remove given count of characters matching filters. If count is undefined: remove only 1 character. If all filters are 
set to undefined: do NOT remove characters. If count is greater than count of matching characters: remove all matching 
ones and don't remove anything else.

Implementation details:
All methods comparing filters with Nickname should work as case-insensitive.
Methods: count, exists, find and getAll should operate on list of all characters which were added expect the ones 
which has been already removed.
All returned results (find, getAll) should be ordered by add order (therefore no reordering / sorting).
All removes should follow same rule. Removing first matching occurence(s) when ordering by Character creation (adding 
to server) order.

E.g.
If we called:
WoWServer.add("PlayerX", Class.Warlock, ClassSpecialization.Destruction)
WoWServer.add("Super nick", Class.Warrior, ClassSpecialization.Arms)
WoWServer.add("PlayerX", Class.Mage, ClassSpecialization.FrostMage)
WoWServer.removeFirst("PlayerX")
Then it should remove first player which matches nickname: PlayerX.
We had 2 entries matching this filter, so we have to decide which one to remove.
PlayerX Destruction Warlock was added before PlayerX FrostMage Mage so we will remove PlayerX Destruction Warlock, 
because it was added (1) before the Mage (3).

Filters are:
Nickname
Class
ClassSpecialization
Character:
Created Character should match interface:
interface Character {
    nickname: string;
    class: Class;
    specialization: ClassSpecialization;
}
which is already preloaded.

Class and ClassSpecialization are also preloaded. Here is how they look like:
enum Class {
    Mage,
    Warlock,
    Priest,

    Rogue,
    Monk,
    Dh,
    Druid,

    Shaman,
    Hunter,

    Warrior,
    Paladin,
    Dk,
}

enum ClassSpecialization {
    Fire,
    FrostMage,
    Arcane,

    Destruction,
    Affliction,
    Demonology,

    HolyPriest,
    Discipline,
    Shadow,

    Assasin,
    Subtely,
    Outlaw,

    Mistweaver,
    Windwalker,
    Brewmaster,

    Havoc,
    Vengeance,

    Feral,
    Guardian,
    Balance,
    RestoDruid,

    Elemental,
    Enh,
    RestoShaman,

    Marksman,
    Survival,
    BeastMaster,

    Arms,
    Fury,
    ProtectionWarrior,

    HolyPaladin,
    ProtectionPaladin,
    Retribution,

    FrostDk,
    Unholy,
    Blood,
}

import { Character, Class, ClassSpecialization } from "./preloaded";

export class WowServer {
  allPlayers: Character[] = [];

  add(nickname: string, characterClass: Class, spec: ClassSpecialization): void {}

  addMany(...characters: Character[]): void {}

  count(nickname?: string, charClass?: Class, spec?: ClassSpecialization): number {
      return 0;
  }

  exists(nickname?: string, charClass?: Class, spec?: ClassSpecialization): boolean {
      return false;
  }

  find(nickname?: string, charClass?: Class, spec?: ClassSpecialization): Character[] {
      return [];
  }

  getAll(): Character[] {
      return [];
  }

  remove(nickname?: string, charClass?: Class, spec?: ClassSpecialization, count?: number): void {}

  removeFirst(nickname?: string, charClass?: Class, spec?: ClassSpecialization): void {}
}
*/

import { Character, Class, ClassSpecialization } from "./preloaded";

export class WowServer {
  allPlayers: Character[] = [];

  add(
    nickname: string,
    characterClass: Class,
    spec: ClassSpecialization
  ): void {
    const character: Character = {
      nickname,
      class: characterClass,
      specialization: spec
    };
    this.allPlayers.push(character);
  }

  addMany(...characters: Character[]): void {
    this.allPlayers.push(...characters);
  }

  count(
    nickname?: string,
    charClass?: Class,
    spec?: ClassSpecialization
  ): number {
    return this.find(nickname, charClass, spec).length;
  }

  exists(
    nickname?: string,
    charClass?: Class,
    spec?: ClassSpecialization
  ): boolean {
    return this.find(nickname, charClass, spec).length > 0;
  }

  find(
    nickname?: string,
    charClass?: Class,
    spec?: ClassSpecialization
  ): Character[] {
    return this.allPlayers.filter(
      (x) =>
        (nickname == undefined ||
          nickname.toLowerCase() == x.nickname.toLowerCase()) &&
        (charClass == undefined || charClass == x.class) &&
        (spec == undefined || x.specialization == spec)
    );
  }

  getAll(): Character[] {
    return this.allPlayers;
  }

  remove(
    nickname?: string,
    charClass?: Class,
    spec?: ClassSpecialization,
    count?: number
  ): void {
    if (count == undefined) {
      count = 1;
    }
    if (nickname == undefined && charClass == undefined && spec == undefined) {
      return;
    }
    for (let i = 0; i < count; ++i) {
      let pos = this.allPlayers.findIndex(
        (x) =>
          (nickname == undefined ||
            nickname.toLowerCase() == x.nickname.toLowerCase()) &&
          (charClass == undefined || charClass == x.class) &&
          (spec == undefined || x.specialization == spec)
      );
      if (pos < 0) {
        break;
      }
      this.allPlayers.splice(pos, 1);
    }
  }

  removeFirst(
    nickname?: string,
    charClass?: Class,
    spec?: ClassSpecialization
  ): void {
    this.remove(nickname, charClass, spec, 1);
  }
}
