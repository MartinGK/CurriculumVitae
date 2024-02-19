
export const NavOptionsIDs = {
  ABOUT_ME: "about-me",
  EXPERIENCES: "experiences",
  SKILLS: "skills",
  CONTACT: "contact",
};

// Typescript gymnastics?
export type NavOptionsIDsKeys = keyof typeof NavOptionsIDs;
export type NavOptionsIDsValues = typeof NavOptionsIDs[NavOptionsIDsKeys]

export type NavOption = {
    segment: string,
    title: string,
    link: string,
    label: string,
    icon: string,
    id: NavOptionsIDsValues,
    position: number
}

class NavOptionsGetter {
  options: NavOption[] = [
    {
      segment: "about-me",
      link: "/about-me",
      title: "About me",
      label: "About me",
      id: NavOptionsIDs.ABOUT_ME,
      icon: "FaUser",
      position: 0
    }, {
      segment: "experiences",
      link: "/experiences",
      title: "Experiences",
      label: "Experiences",
      id: NavOptionsIDs.EXPERIENCES,
      icon: "MdWork",
      position: 1
    }, {
      segment: "skills",
      link: "/skills",
      title: "Skills",
      label: "Skills",
      icon: "GiSkills",
      id: NavOptionsIDs.SKILLS,
      position: 2
    }, {
      segment: "contact",
      link: "/contact",
      title: "Contact",
      label: "Contact",
      id: NavOptionsIDs.CONTACT,
      icon: "BsChat",
      position: 3
    }];

  get length() {
    return this.options.length;
  }

  get first() {
    return this.options[0];
  }

  getOptionByID(key: string): NavOption {
    const optionFound = this.options.find(opt => opt.id === key);
    return optionFound ? optionFound : this.first;
  }

  getOptionByPosition(pos: number): NavOption {
    const optionFound = this.options.find(opt => opt.position === pos);
    return optionFound ? optionFound : this.first;
  }

  getOptionIDBySegment(segment: string | null) {
    if (segment === null) return "";
    const optionFound = this.options.find(opt => opt.segment === segment);
    return optionFound ? optionFound.id : this.first.id;
  }

  getOptionTitleBySegment(segment: string | null) {
    if (segment === null) return "";
    const optionFound = this.options.find(opt => opt.segment === segment);
    return optionFound ? optionFound.title : this.first.title;
  }

  getOptionPositionByID(key: string) {
    return this.getOptionByID(key).position;
  }

  getOptionSegmentByID(key: string) {
    return this.getOptionByID(key).segment;
  }

  getOptionTitleByID(id: string) {
    return this.getOptionByID(id).title;
  }

}

export const NavOptions = new NavOptionsGetter();
