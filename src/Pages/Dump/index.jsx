import { RecoilRoot } from 'recoil';
import useTrashList from '../../states/hooks/trashList/useTrashList';
import styles from './Dump.module.scss';
import ListDump from './ListDump';

const Dump = () => {
  return (
    <section className={styles['dump-section']}>
      <ListDump />
    </section>
  )
}

export default Dump;