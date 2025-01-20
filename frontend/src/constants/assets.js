// Logos
export const logos = {
  default: require('../assets/images/logos/logo.svg'),
  dark: require('../assets/images/logos/logo-dark.svg'),
  light: require('../assets/images/logos/logo-light.svg'),
};

// Icons
export const icons = {
  // General Icons
  general: {
    addContact: require('../assets/images/icons/general/icon_add contact.svg'),
    arrowBack: require('../assets/images/icons/general/icon_arrow back.svg'),
    arrowCircleLeft: require('../assets/images/icons/general/icon_arrow circle left.svg'),
    arrowCircleRight: require('../assets/images/icons/general/icon_arrow circle right.svg'),
    arrowDropdown: require('../assets/images/icons/general/icon_arrow dropdown.svg'),
    calendar: require('../assets/images/icons/general/icon_calendder.svg'),
    checklistRectangle: require('../assets/images/icons/general/icon_checklist rectangle.svg'),
    contacts: require('../assets/images/icons/general/icon_contects.svg'),
    documents: require('../assets/images/icons/general/icon_documents.svg'),
    documents2: require('../assets/images/icons/general/icon_documents 2.svg'),
    download: require('../assets/images/icons/general/icon_download.svg'),
    edit: require('../assets/images/icons/general/icon_edit.svg'),
    export: require('../assets/images/icons/general/icon_export.svg'),
    eyeClose: require('../assets/images/icons/general/icon_eye close.svg'),
    eyeOff: require('../assets/images/icons/general/icon_eye off.svg'),
    eyeOpen: require('../assets/images/icons/general/icon_eye open.svg'),
    folder: require('../assets/images/icons/general/icon_folder.svg'),
    globe: require('../assets/images/icons/general/icon_globe.svg'),
    home: require('../assets/images/icons/general/icon_home.svg'),
    more: require('../assets/images/icons/general/icon_more.svg'),
    notification: require('../assets/images/icons/general/icon_notification.svg'),
    observationReport: require('../assets/images/icons/general/icon_observation report.svg'),
    search: require('../assets/images/icons/general/icon_search.svg'),
    settings: require('../assets/images/icons/general/icon_settings.svg'),
    star: require('../assets/images/icons/general/icon_star.svg'),
    trash: require('../assets/images/icons/general/icon_trash.svg'),
    user: require('../assets/images/icons/general/icon_user.svg'),
  },
  
  // Behavioral Icons
  behavioral: {
    community: {
      1: require('../assets/images/icons/behavioral/community/icon_behavioral community_behavioral 1.svg'),
      2: require('../assets/images/icons/behavioral/community/icon_behavioral community_behavioral 2.svg'),
      3: require('../assets/images/icons/behavioral/community/icon_behavioral community_behavioral 3.svg'),
      4: require('../assets/images/icons/behavioral/community/icon_behavioral community_behavioral 4.svg'),
      5: require('../assets/images/icons/behavioral/community/icon_behavioral community_behavioral 5.svg'),
      6: require('../assets/images/icons/behavioral/community/icon_behavioral community_behavioral 6.svg'),
    }
  }
};

// Illustrations
export const illustrations = {
  school: {
    png: require('../assets/images/illustrations/school/PNG'),
    svg: require('../assets/images/illustrations/school/SVG')
  },
  home: require('../assets/images/illustrations/home'),
  community: require('../assets/images/illustrations/community')
};

// Default Images
export const defaultImages = {
  avatar: icons.general.user,
  logo: logos.default,
  logoDark: logos.dark,
  logoLight: logos.light,
};

// Export all assets
export default {
  logos,
  icons,
  illustrations,
  defaultImages,
};
