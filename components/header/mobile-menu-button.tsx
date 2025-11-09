// components/Header/MobileMenuButton.tsx
interface MobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ open, onClick }: MobileMenuButtonProps) {
  return (
    <div className="md:hidden">
      <button
        type="button"
        className="mobile-menu-btn"
        onClick={onClick}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
