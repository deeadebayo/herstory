import Highway from '@dogstudio/highway';
import anime from 'animejs/lib/anime.es';

/* to: The data-router-view to display.
from: The data-router-view to hide.
done: The required callback method that has to be called once the animation is done.

in: This method should contain the animation to display a data-router-view.
out: This method should contain the animation to hide a data-router-view. */

//Fade
class Fade extends Highway.Transition {
	in({ from, to, done }) {
		// animation. Call to and done in the function
		from.remove();
		anime({
			//add duration, starting point, ending point
			targets: to,
			opacity: [0, 1],
			complete: done,
			easing: 'linear'
		});
	}
	out({ from, done }) {
		//animation. Call from and done
		anime({
			targets: from,
			opacity: [1, 0],
			complete: done,
			easing: 'linear'
		});
	}
}

export default Fade;
