import { Helmet } from 'react-helmet-async'

export default function JsonLd({ data }: { data: unknown }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
