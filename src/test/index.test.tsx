import { render, screen } from '@testing-library/react'

import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getAllByText('Instantly deploy your Next.js site to a shareable URL with Vercel.')

    expect(heading).toBeTruthy()
  })
})
