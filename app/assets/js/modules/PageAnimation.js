import Highway from '@dogstudio/highway';
import Fade from './highway-mods/transition__fade';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Fade
	}
});

export default pageAnimation;
