'use client'

const reportUrl = '/prism-care-executive-review.pdf'

type CareReportLinkProps = {
  className?: string
  children: React.ReactNode
  label?: string
}

export function CareReportLink({
  className,
  children,
  label,
}: CareReportLinkProps) {
  function handleClick() {
    window.gtag?.('event', 'care_report_opened', {
      event_category: 'engagement',
      event_label: 'Care Executive Review PDF',
      transport_type: 'beacon',
    })
  }

  return (
    <a
      href={reportUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      parameters?: Record<string, string | number | boolean>
    ) => void
  }
}
