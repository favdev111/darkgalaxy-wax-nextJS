import withStyles from '../tools/withStyles';
import withSounds from '../tools/withSounds';
import Staff from './Staff';
import styles from './styles';

export default withStyles(styles)(
  withSounds()(Staff)
);
