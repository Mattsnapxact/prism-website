'use client'

const reportUrl = '/estate-intelligence-review.pdf'

type ReportLinkProps = {
  className?: string
  children: React.ReactNode
  label?: string
}

export function ReportLink({
  className,
  children,
  label,
}: ReportLinkProps) {
  function handleClick() {
    window.gtag?.('event', 'sample_report_opened', {
      event_category: 'engagement',
      event_label: 'Executive Review PDF',
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
