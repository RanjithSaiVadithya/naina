import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

/**
 * Hook to determine if this is the user's first visit
 * @param {string} cookieName - Name of the cookie to check/set
 * @param {number} expiryDays - Number of days until cookie expires
 * @returns {boolean} Whether this is the user's first visit
 */
const useFirstVisit = (cookieName = 'hasVisited', expiryDays = 1) => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = Cookies.get(cookieName);
    
    if (!hasVisited) {
      setIsFirstVisit(true);
      // Set cookie to remember the visit
      Cookies.set(cookieName, 'true', { expires: expiryDays });
    }
  }, [cookieName, expiryDays]);

  return isFirstVisit;
};

export default useFirstVisit;