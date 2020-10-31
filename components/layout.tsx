import {ReactNode} from "react";
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  alert?: ReactNode
  children: ReactNode
}

const Layout = ({ alert, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
          {alert && (
              <Alert>
                  {alert}
              </Alert>
          )}
          <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
