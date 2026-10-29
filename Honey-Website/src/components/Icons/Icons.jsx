function baseProps(props) {
  return {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    ...props,
  }
}

export function SearchIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.2" y2="16.2" />
    </svg>
  )
}

export function AccountIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.8 20c1.2-3.8 4.3-5.8 7.2-5.8s6 2 7.2 5.8" />
    </svg>
  )
}

export function CartIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 7h2.2l1.4 10.2a1.6 1.6 0 0 0 1.6 1.4h8.2a1.6 1.6 0 0 0 1.6-1.4L20.4 9H7.4" />
      <circle cx="10.5" cy="21" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="21" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

export function DropletIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3c3.5 4.2 6 7.6 6 10.5a6 6 0 1 1-12 0C6 10.6 8.5 7.2 12 3z" />
    </svg>
  )
}

export function HiveIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3 20 7.5v9L12 21 4 16.5v-9z" />
    </svg>
  )
}

export function LeafIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M20 4C9 4 4 9 4 16c0 1.5.3 2.8.8 4" />
      <path d="M20 4c0 11-5 16-16 16" />
    </svg>
  )
}

export function TruckIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="2.5" y="7" width="11" height="9" rx="1" />
      <path d="M13.5 10h4l3.5 3.5V16h-7.5z" />
      <circle cx="7" cy="18" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="17" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BadgeIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.3l2.3 2.3 4.7-4.9" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.3 1.4-1.3h1.5V5.3C15.9 5.2 15 5.1 14 5.1c-2.1 0-3.5 1.3-3.5 3.6v2.3H8v2.8h2.5V21z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function StarIcon({ filled, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      fill={filled ? 'currentColor' : 'none'}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg {...baseProps({ width: 14, height: 14, ...props })}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export function MinusIcon(props) {
  return (
    <svg {...baseProps({ width: 14, height: 14, ...props })}>
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export function TrashIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5 7h14" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M7 7l1 13a1.5 1.5 0 0 0 1.5 1.4h5a1.5 1.5 0 0 0 1.5-1.4L17 7" />
    </svg>
  )
}

export function ChevronDownIcon(props) {
  return (
    <svg {...baseProps({ width: 14, height: 14, ...props })}>
      <polyline points="5 8.5 12 15.5 19 8.5" />
    </svg>
  )
}
