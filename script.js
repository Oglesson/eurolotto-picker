function pickUniqueSorted(min, max, count) {
	const pool = [];
	for (let n = min; n <= max; n += 1) {
		pool.push(n);
	}

	for (let i = pool.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[pool[i], pool[j]] = [pool[j], pool[i]];
	}

	return pool.slice(0, count).sort((a, b) => a - b);
}

function renderBalls(list, numbers) {
	list.innerHTML = '';
	numbers.forEach((number) => {
		const item = document.createElement('li');
		item.textContent = number;
		list.appendChild(item);
	});
}

function generateNumbers() {
	const mainNumbers = pickUniqueSorted(1, 50, 5);
	const starNumbers = pickUniqueSorted(1, 12, 2);

	renderBalls(document.getElementById('main-numbers'), mainNumbers);
	renderBalls(document.getElementById('star-numbers'), starNumbers);
}

document.getElementById('generate-btn').addEventListener('click', generateNumbers);

generateNumbers();
