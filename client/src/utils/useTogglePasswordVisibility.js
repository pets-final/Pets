import React, {useState} from "react";

const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordVisibilitytwo, setPasswordVisibilitytwo] = useState(false);
  const [passwordVisibilitytwoth, setPasswordVisibilitytwoth] = useState(false);
  const [bookmarkiconvisibility, setbookmarkiconvisibility] = useState(false);
  const [rightIcon, setRightIcon] = useState('eye-off');
  const [rightIcontwo, setRightIcontwo] = useState('eye-off');
  const [rightIcontwoth, setRightIcontwoth] = useState('eye-off');
  const [bookmarkicon, setbookmarkicon] = useState('bookmark-o');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const handlePasswordVisibilitytwo = () => {
    if (rightIcontwo === 'eye-off') {
      setRightIcontwo('eye');
      setPasswordVisibilitytwo(!passwordVisibilitytwo);
    } else if (rightIcontwo === 'eye') {
      setRightIcontwo('eye-off');
      setPasswordVisibilitytwo(!passwordVisibilitytwo);
    }
  };
  const handlePasswordVisibilitytwoth = () => {
    if (rightIcontwoth === 'eye-off') {
      setRightIcontwoth('eye');
      setPasswordVisibilitytwoth(!passwordVisibilitytwoth);
    } else if (rightIcontwoth === 'eye') {
      setRightIcontwoth('eye-off');
      setPasswordVisibilitytwoth(!passwordVisibilitytwoth);
    }
  };
  const bookmarkseticon = () => {
    if (bookmarkicon === 'bookmark-o') {
      setbookmarkicon('bookmark');
      setbookmarkiconvisibility(!bookmarkiconvisibility);
    } else if (bookmarkicon === 'bookmark') {
      setbookmarkicon('bookmark-o');
      setbookmarkiconvisibility(!bookmarkiconvisibility);
    }
  };
  return {
    passwordVisibilitytwo,
    passwordVisibilitytwoth,
    passwordVisibility,
    bookmarkiconvisibility,
    rightIcon,
    bookmarkicon,
    rightIcontwo,
    rightIcontwoth,
    handlePasswordVisibility,
    handlePasswordVisibilitytwo,
    handlePasswordVisibilitytwoth,
    bookmarkseticon
  };
};
export default useTogglePasswordVisibility;