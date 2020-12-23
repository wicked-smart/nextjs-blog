import Link from 'next/link'
import Iframe from 'react-iframe'

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4vbLaV1TM34xUXo7sJDvSDHidZo46d5bdxF6V3k8bconx2g/viewform?embedded=true" width="640" height="1204" frameborder="0" marginheight="0" marginwidth="0">Loading…
</iframe>

export default function FirstPost(){
    return (
      <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to the Home Page</a>
        </Link>
      </h2>
      </>
    )
}
