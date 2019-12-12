import Highway from '@dogstudio/highway';
import Fade from './highway-mods/transition__fade';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Fade
	}
});

if (Highway) {
	console.warn(`it's working bb`);
} else {
	console.warn(`Highway is not enabled`);
}

export default pageAnimation;
