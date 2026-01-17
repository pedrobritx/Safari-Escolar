/**
 * Global auth events for handling session expiry across the app
 */

type AuthEventListener = () => void;

class AuthEvents {
  private listeners: AuthEventListener[] = [];

  subscribe(listener: AuthEventListener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  emitSessionExpired() {

    this.listeners.forEach(listener => listener());
  }
}

export const authEvents = new AuthEvents();
