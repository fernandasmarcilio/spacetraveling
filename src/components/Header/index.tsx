import Link from 'next/link';

import commonStyles from '../../styles/common.module.scss';
import headerStyles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <div className={`${commonStyles.container} ${headerStyles.container}`}>
      <Link href="/">
        <a>
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Link>
    </div>
  );
}
