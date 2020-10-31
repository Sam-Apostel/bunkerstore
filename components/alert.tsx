import Container from './container'
import cn from 'classnames'
import {ReactNode} from "react";

type Props = {
  children?: ReactNode
}

const Alert = ({ children }: Props) => {
  return (
    <div
      className={cn('border-b bg-accent-1 border-accent-2')}
    >
      <Container>
        <div className="py-2 text-center text-sm">
            {children}
        </div>
      </Container>
    </div>
  )
}

export default Alert
