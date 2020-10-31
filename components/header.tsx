import Link from 'next/link'
import StoreType from "../types/store";
type Props = {
    store: StoreType
}
const Header = ({store}: Props) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">{store.name}</a>
      </Link>
      .
    </h2>
  )
}

export default Header
