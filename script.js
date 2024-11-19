document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/items');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const items = await response.json();
  
      const itemsContainer = document.getElementById('itemsContainer');
      itemsContainer.innerHTML = ''; 
      items.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}" style="width:150px; height:150px;" />
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
        `;
        itemsContainer.appendChild(itemDiv);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });