/* ==========================================================================
   GYM PRO - Authentication Guard & Session Management
   ========================================================================== */

window.Auth = {
  // Admin Guard
  requireAdmin: function () {
    const role = localStorage.getItem('loggedInRole');
    if (role !== 'admin') {
      window.location.href = 'admin-login.html';
    }
  },

  // Member Guard
  requireMember: function () {
    const memberStr = localStorage.getItem('loggedInMember');
    if (!memberStr) {
      window.location.href = 'user-login.html';
      return null;
    }
    try {
      const member = JSON.parse(memberStr);
      if (!member || !member.name) {
        window.location.href = 'user-login.html';
        return null;
      }
      return member;
    } catch (e) {
      localStorage.removeItem('loggedInMember');
      window.location.href = 'user-login.html';
      return null;
    }
  },

  // Get current logged-in member object
  getMember: function () {
    const memberStr = localStorage.getItem('loggedInMember');
    if (!memberStr) return null;
    try {
      return JSON.parse(memberStr);
    } catch (e) {
      return null;
    }
  },

  // Logout session
  logout: function () {
    localStorage.removeItem('loggedInRole');
    localStorage.removeItem('loggedInMember');
    window.location.href = 'role.html';
  },

  // Update top-bar user badge dynamically
  updateTopBar: function (titleText) {
    if (titleText) {
      const titleEl = document.getElementById('pageTitle');
      if (titleEl) titleEl.textContent = titleText;
    }

    const role = localStorage.getItem('loggedInRole');
    const member = window.Auth.getMember();

    const nameEl = document.getElementById('topBarUserName');
    const roleEl = document.getElementById('topBarUserRole');
    const avatarEl = document.getElementById('topBarAvatar');

    if (role === 'admin') {
      if (nameEl) nameEl.textContent = 'Administrator';
      if (roleEl) roleEl.textContent = 'System Admin';
      if (avatarEl) avatarEl.textContent = 'A';
    } else if (member) {
      if (nameEl) nameEl.textContent = member.name;
      if (roleEl) roleEl.textContent = member.plan || 'Member';
      if (avatarEl) avatarEl.textContent = member.name.charAt(0).toUpperCase();
    }
  }
};
