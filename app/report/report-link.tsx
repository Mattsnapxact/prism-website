'use client'

import { track } from '@vercel/analytics'

const reportUrl = '/estate-intelligence-review.pdf'

type ReportLinkProps = {
  className?: string
  children: React.ReactNode
  source?: string
}

export function ReportLink({ className, children, source }: ReportLinkProps) {
  return (
    <a
      href={reportUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        track('sample_report_opened', {
          source: source || 'direct',
        })
      }
    >
      {children}
    </a>
  )
}
