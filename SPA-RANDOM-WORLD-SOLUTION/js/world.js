function generateTrees(numberOfTrees) {
    for (let a = 0; a < numberOfTrees; a++) {
        const treeClasses = ['tree-style-1', 'tree-style-2', 'tree-style-3'];

        const tree = document.createElement('div');
        const x = Math.random() * document.body.clientWidth;
        const y = Math.random() * document.body.clientHeight;
        const randomTreeIndex = Math.floor(Math.random() * treeClasses.length);
        const treeClass = treeClasses[randomTreeIndex];
        
        document.body.appendChild(tree);
    
        tree.classList.add('tree', treeClass);
    
        tree.style.left = `${x}px`;
        tree.style.top = `${y}px`;
    }
}

generateTrees(300);

function generateInsects(numberOfInsects) {
    for(let a = 0; a < numberOfInsects; a++) {
        const insect = document.createElement('div');
        const x = Math.random() * document.body.clientWidth;
        const y = Math.random() * document.body.clientHeight;

        document.body.appendChild(insect);
    
        insect.classList.add('insect');
    
        insect.style.left = `${x}px`;
        insect.style.top = `${y}px`;

        insect.addEventListener('click', () => {
            insect.classList.add('insect-death');

            setTimeout(() => {
                insect.remove();
            }, 2000);
        });
    }
}

generateInsects(20);