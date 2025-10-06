'Spinach': { storage: 'Refrigerate in bag.', ripeness: 'Dark green, crisp.', season: 'Year-round' },
    'Kale': { storage: 'Refrigerate in plastic bag.', ripeness: 'Dark green, no yellowing.', season: 'Year-round, best Winter' },
    'Arugula': { storage: 'Refrigerate, very delicate.', ripeness: 'Bright green, tender.', season: 'Spring and Fall' },
    'Swiss Chard': { storage: 'Refrigerate in plastic bag.', ripeness: 'Crisp stalks, vibrant.', season: 'June to October' },
    'Mushroom (White)': { storage: 'Refrigerate in paper bag.', ripeness: 'Firm, dry, closed caps.', season: 'Year-round' },
    'Mushroom (Portobello)': { storage: 'Paper bag in refrigerator.', ripeness: 'Firm, dry, large caps.', season: 'Year-round' },
    'Mushroom (Shiitake)': { storage: 'Refrigerate in paper bag.', ripeness: 'Firm, dry.', season: 'Year-round' },
    'Basil': { storage: 'Room temp in water like flowers.', ripeness: 'Bright green.', season: 'June to September' },
    'Cilantro': { storage: 'Refrigerate stems in water.', ripeness: 'Bright green, fragrant.', season: 'Year-round' },
    'Parsley': { storage: 'Refrigerate in bag or water.', ripeness: 'Bright green, crisp.', season: 'Year-round' },
    'Mint': { storage: 'Refrigerate stems in water.', ripeness: 'Bright green, aromatic.', season: 'Year-round' },
    'Celery': { storage: 'Wrap in foil, refrigerate.', ripeness: 'Firm, crisp stalks.', season: 'Year-round' },
    'Eggplant': { storage: 'Room temperature.', ripeness: 'Firm, glossy skin.', season: 'July to October' },
    'Asparagus': { storage: 'Refrigerate upright in water.', ripeness: 'Firm stalks, tight tips.', season: 'February to June' },
    'Corn': { storage: 'Refrigerate in husk.', ripeness: 'Bright green husk, plump kernels.', season: 'May to September' },
    'Pear (Bartlett)': { storage: 'Room temp to ripen.', ripeness: 'Gives at neck, fragrant.', season: 'August to February' },
    'Pear (Anjou)': { storage: 'Room temp to ripen.', ripeness: 'Gives to pressure at neck.', season: 'October to May' },
    'Pear (Bosc)': { storage: 'Ripen at room temp.', ripeness: 'Color deepens, soft at neck.', season: 'September to April' }
};

// NUTRITION DATABASE
const nutritionData = {
    'Banana': { calories: 105, carbs: '27g', protein: '1.3g', fiber: '3g', potassium: '422mg', vitaminC: '10mg' },
    'Banana (Organic)': { calories: 105, carbs: '27g', protein: '1.3g', fiber: '3g', potassium: '422mg', vitaminC: '10mg' },
    'Apple (Fuji)': { calories: 95, carbs: '25g', protein: '0.5g', fiber: '4g', sugar: '19g', vitaminC: '8mg' },
    'Apple (Granny Smith)': { calories: 80, carbs: '22g', protein: '0.4g', fiber: '4g', sugar: '15g', vitaminC: '10mg' },
    'Apple (Gala)': { calories: 95, carbs: '25g', protein: '0.5g', fiber: '4g', sugar: '19g', vitaminC: '8mg' },
    'Apple (Golden Delicious)': { calories: 95, carbs: '25g', protein: '0.5g', fiber: '4g', sugar: '19g', vitaminC: '8mg' },
    'Apple (Red Delicious)': { calories: 95, carbs: '25g', protein: '0.5g', fiber: '4g', sugar: '19g', vitaminC: '8mg' },
    'Apple (McIntosh)': { calories: 95, carbs: '25g', protein: '0.5g', fiber: '4g', sugar: '19g', vitaminC: '10mg' },
    'Apple (Honeycrisp)': { calories: 95, carbs: '25g', protein: '0.5g', fiber: '4g', sugar: '19g', vitaminC: '8mg' },
    'Apple (Organic Fuji)': { calories: 95, carbs: '25g', protein: '0.5g', fiber: '4g', sugar: '19g', vitaminC: '8mg' },
    'Apple (Organic Granny Smith)': { calories: 80, carbs: '22g', protein: '0.4g', fiber: '4g', sugar: '15g', vitaminC: '10mg' },
    'Avocado': { calories: 234, carbs: '12g', protein: '3g', fiber: '10g', fat: '21g', potassium: '690mg' },
    'Avocado (Hass)': { calories: 234, carbs: '12g', protein: '3g', fiber: '10g', fat: '21g', potassium: '690mg' },
    'Avocado (Organic Hass)': { calories: 234, carbs: '12g', protein: '3g', fiber: '10g', fat: '21g', potassium: '690mg' },
    'Tomato (Roma)': { calories: 35, carbs: '7g', protein: '1.5g', fiber: '2g', vitaminC: '24mg', vitaminA: '1025IU' },
    'Tomato (Beefsteak)': { calories: 40, carbs: '9g', protein: '2g', fiber: '2.5g', vitaminC: '28mg', vitaminA: '1100IU' },
    'Tomato (Cherry)': { calories: 27, carbs: '6g', protein: '1.3g', fiber: '1.8g', vitaminC: '21mg', vitaminA: '900IU' },
    'Tomato (Grape)': { calories: 27, carbs: '6g', protein: '1.3g', fiber: '1.8g', vitaminC: '21mg', vitaminA: '900IU' },
    'Tomato (Organic Roma)': { calories: 35, carbs: '7g', protein: '1.5g', fiber: '2g', vitaminC: '24mg', vitaminA: '1025IU' },
    'Strawberry': { calories: 49, carbs: '12g', protein: '1g', fiber: '3g', sugar: '7g', vitaminC: '89mg' },
    'Strawberry (Organic)': { calories: 49, carbs: '12g', protein: '1g', fiber: '3g', sugar: '7g', vitaminC: '89mg' },
    'Lettuce (Green Leaf)': { calories: 15, carbs: '3g', protein: '1.4g', fiber: '1.3g', vitaminA: '7400IU', vitaminK: '174mcg' },
    'Lettuce (Iceberg)': { calories: 10, carbs: '2g', protein: '0.6g', fiber: '1g', vitaminA: '500IU', vitaminK: '17mcg' },
    'Lettuce (Romaine)': { calories: 17, carbs: '3g', protein: '1.2g', fiber: '2g', vitaminA: '8700IU', vitaminK: '103mcg' },
    'Lettuce (Red Leaf)': { calories: 13, carbs: '2g', protein: '1.3g', fiber: '1g', vitaminA: '7500IU', vitaminK: '140mcg' },
    'Lettuce (Organic Green Leaf)': { calories: 15, carbs: '3g', protein: '1.4g', fiber: '1.3g', vitaminA: '7400IU', vitaminK: '174mcg' },
    'Orange (Navel)': { calories: 69, carbs: '18g', protein: '1.3g', fiber: '3.4g', sugar: '12g', vitaminC: '83mg' },
    'Orange (Valencia)': { calories: 62, carbs: '15g', protein: '1.2g', fiber: '3.1g', sugar: '12g', vitaminC: '70mg' },
    'Orange (Cara Cara)': { calories: 70, carbs: '18g', protein: '1.3g', fiber: '3.4g', sugar: '12g', vitaminC: '100mg' },
    'Orange (Organic Navel)': { calories: 69, carbs: '18g', protein: '1.3g', fiber: '3.4g', sugar: '12g', vitaminC: '83mg' },
    'Grapes (Green)': { calories: 104, carbs: '27g', protein: '1.1g', fiber: '1.4g', sugar: '23g', vitaminC: '16mg' },
    'Grapes (Red)': { calories: 104, carbs: '27g', protein: '1.1g', fiber: '1.4g', sugar: '23g', vitaminC: '16mg' },
    'Grapes (Black)': { calories: 104, carbs: '27g', protein: '1.1g', fiber: '1.4g', sugar: '23g', vitaminC: '16mg' },
    'Grapes (Organic Green)': { calories: 104, carbs: '27g', protein: '1.1g', fiber: '1.4g', sugar: '23g', vitaminC: '16mg' },
    'Blueberry': { calories: 84, carbs: '21g', protein: '1.1g', fiber: '3.6g', sugar: '15g', vitaminC: '14mg' },
    'Raspberry': { calories: 64, carbs: '15g', protein: '1.5g', fiber: '8g', sugar: '5g', vitaminC: '32mg' },
    'Blackberry': { calories: 62, carbs: '14g', protein: '2g', fiber: '7.6g', sugar: '7g', vitaminC: '30mg' },
    'Blueberry (Organic)': { calories: 84, carbs: '21g', protein: '1.1g', fiber: '3.6g', sugar: '15g', vitaminC: '14mg' },
    'Pepper (Green Bell)': { calories: 30, carbs: '7g', protein: '1.3g', fiber: '2.5g', vitaminC: '120mg', vitaminA: '370IU' },
    'Pepper (Red Bell)': { calories: 37, carbs: '9g', protein: '1.5g', fiber: '3g', vitaminC: '190mg', vitaminA: '4666IU' },
    'Pepper (Yellow Bell)': { calories: 40, carbs: '10g', protein: '1.5g', fiber: '1.7g', vitaminC: '341mg', vitaminA: '200IU' },
    'Pepper (Orange Bell)': { calories: 40, carbs: '10g', protein: '1.5g', fiber: '1.7g', vitaminC: '341mg', vitaminA: '200IU' },
    'Pepper (Jalapeño)': { calories: 29, carbs: '6g', protein: '1g', fiber: '2.8g', vitaminC: '119mg' },
    'Potato (Russet)': { calories: 168, carbs: '38g', protein: '5g', fiber: '2.4g', potassium: '926mg', vitaminC: '20mg' },
    'Potato (Red)': { calories: 149, carbs: '34g', protein: '4g', fiber: '3g', potassium: '943mg', vitaminC: '26mg' },
    'Potato (Yukon Gold)': { calories: 110, carbs: '26g', protein: '3g', fiber: '2g', potassium: '738mg', vitaminC: '27mg' },
    'Sweet Potato': { calories: 112, carbs: '26g', protein: '2g', fiber: '4g', vitaminA: '19218IU', vitaminC: '3mg' },
    'Potato (Organic Russet)': { calories: 168, carbs: '38g', protein: '5g', fiber: '2.4g', potassium: '926mg', vitaminC: '20mg' },
    'Onion (Yellow)': { calories: 44, carbs: '10g', protein: '1.2g', fiber: '1.9g', vitaminC: '8mg' },
    'Onion (Red)': { calories: 44, carbs: '10g', protein: '1.2g', fiber: '1.9g', vitaminC: '8mg' },
    'Onion (White)': { calories: 44, carbs: '10g', protein: '1.2g', fiber: '1.9g', vitaminC: '8mg' },
    'Onion (Green/Scallion)': { calories: 32, carbs: '7g', protein: '1.8g', fiber: '2.6g', vitaminK: '207mcg', vitaminC: '19mg' },
    'Carrot': { calories: 52, carbs: '12g', protein: '1.2g', fiber: '3.6g', vitaminA: '21384IU' },
    'Carrot (Baby)': { calories: 52, carbs: '12g', protein: '1.2g', fiber: '3.6g', vitaminA: '21384IU' },
    'Carrot (Organic)': { calories: 52, carbs: '12g', protein: '1.2g', fiber: '3.6g', vitaminA: '21384IU' },
    'Broccoli': { calories: 55, carbs: '11g', protein: '3.7g', fiber: '3.8g', vitaminC: '135mg', vitaminK: '220mcg' },
    'Cauliflower': { calories: 29, carbs: '6g', protein: '2.3g', fiber: '2.5g', vitaminC: '77mg' },
    'Broccoli (Organic)': { calories: 55, carbs: '11g', protein: '3.7g', fiber: '3.8g', vitaminC: '135mg', vitaminK: '220mcg' },
    'Cucumber': { calories: 16, carbs: '4g', protein: '0.7g', fiber: '0.5g', vitaminK: '17mcg' },
    'Cucumber (English)': { calories: 16, carbs: '4g', protein: '0.7g', fiber: '0.5g', vitaminK: '17mcg' },
    'Cucumber (Organic)': { calories: 16, carbs: '4g', protein: '0.7g', fiber: '0.5g', vitaminK: '17mcg' },
    'Watermelon': { calories: 46, carbs: '12g', protein: '0.9g', fiber: '0.6g', vitaminC: '12mg' },
    'Cantaloupe': { calories: 60, carbs: '14g', protein: '1.5g', fiber: '1.6g', vitaminA: '5986IU', vitaminC: '65mg' },
    'Honeydew': { calories: 64, carbs: '16g', protein: '1g', fiber: '1.4g', vitaminC: '31mg', potassium: '404mg' },
    'Lime': { calories: 30, carbs: '11g', protein: '0.7g', fiber: '2.8g', vitaminC: '32mg' },
    'Lemon': { calories: 29, carbs: '9g', protein: '1.1g', fiber: '2.8g', vitaminC: '53mg' },
    'Grapefruit': { calories: 52, carbs: '13g', protein: '0.9g', fiber: '2g', vitaminC: '38mg', vitaminA: '1414IU' },
    'Tangerine': { calories: 47, carbs: '12g', protein: '0.7g', fiber: '1.8g', vitaminC: '27mg' },
    'Peach': { calories: 59, carbs: '14g', protein: '1.4g', fiber: '2.3g', vitaminC: '10mg', vitaminA: '489IU' },
    'Nectarine': { calories: 63, carbs: '15g', protein: '1.5g', fiber: '2.4g', vitaminC: '7mg' },
    'Plum': { calories: 46, carbs: '11g', protein: '0.7g', fiber: '1.4g', vitaminC: '10mg' },
    'Cherry': { calories: 50, carbs: '12g', protein: '1g', fiber: '1.6g', vitaminC: '7mg', potassium: '173mg' },
    'Apricot': { calories: 48, carbs: '11g', protein: '1.4g', fiber: '1.5g', vitaminA: '1926IU', vitaminC: '10mg' },
    'Pineapple': { calories: 82, carbs: '22g', protein: '0.9g', fiber: '2.3g', vitaminC: '79mg' },
    'Mango': { calories: 99, carbs: '25g', protein: '1.4g', fiber: '2.6g', vitaminC: '60mg', vitaminA: '1785IU' },
    'Papaya': { calories: 62, carbs: '16g', protein: '0.7g', fiber: '2.5g', vitaminC: '87mg' },
    'Kiwi': { calories: 61, carbs: '15g', protein: '1.2g', fiber: '3g', vitaminC: '93mg' },
    'Coconut': { calories: 354, carbs: '15g', protein: '3.3g', fiber: '9g', fat: '33g' },
    'Zucchini': { calories: 21, carbs: '4g', protein: '1.5g', fiber: '1.2g', vitaminC: '22mg', potassium: '295mg' },
    'Squash (Butternut)': { calories: 82, carbs: '22g', protein: '1.8g', fiber: '6.6g', vitaminA: '22869IU', vitaminC: '31mg' },
    'Squash (Acorn)': { calories: 56, carbs: '15g', protein: '1.1g', fiber: '2.2g', vitaminC: '18mg', potassium: '437mg' },
    'Squash (Spaghetti)': { calories: 42, carbs: '10g', protein: '1g', fiber: '2.2g', vitaminC: '5mg' },
    'Spinach': { calories: 23, carbs: '4g', protein: '2.9g', fiber: '2.2g', iron: '2.7mg', vitaminK: '483mcg' },
    'Kale': { calories: 35, carbs: '7g', protein: '2.9g', fiber: '2g', vitaminC: '120mg', vitaminK: '817mcg' },
    'Arugula': { calories: 25, carbs: '4g', protein: '2.6g', fiber: '1.6g', vitaminK: '109mcg', calcium: '160mg' },
    'Swiss Chard': { calories: 19, carbs: '4g', protein: '1.8g', fiber: '1.6g', vitaminK: '299mcg' },
    'Mushroom (White)': { calories: 22, carbs: '3g', protein: '3.1g', fiber: '1g', vitaminD: '7IU' },
    'Mushroom (Portobello)': { calories: 29, carbs: '5g', protein: '2.5g', fiber: '1.5g', potassium: '437mg' },
    'Mushroom (Shiitake)': { calories: 34, carbs: '7g', protein: '2.2g', fiber: '2.5g' },
    'Basil': { calories: 23, carbs: '3g', protein: '3.2g', fiber: '1.6g', vitaminK: '415mcg' },
    'Cilantro': { calories: 23, carbs: '4g', protein: '2.1g', fiber: '2.8g', vitaminK: '310mcg' },
    'Parsley': { calories: 36, carbs: '6g', protein: '3g', fiber: '3.3g', vitaminK: '1640mcg', vitaminC: '133mg' },
    'Mint': { calories: 70, carbs: '15g', protein: '3.8g', fiber: '8g', iron: '5.1mg' },
    'Celery': { calories: 16, carbs: '3g', protein: '0.7g', fiber: '1.6g', vitaminK: '29mcg' },
    'Eggplant': { calories: 25, carbs: '6g', protein: '1g', fiber: '3g' },
    'Asparagus': { calories: 27, carbs: '5g', protein: '3g', fiber: '2.8g', vitaminK: '56mcg' },
    'Corn': { calories: 96, carbs: '21g', protein: '3.4g', fiber: '2.4g', vitaminC: '7mg' },
    'Pear (Bartlett)': { calories: 101, carbs: '27g', protein: '0.6g', fiber: '5.5g', vitaminC: '7mg' },
    'Pear (Anjou)': { calories: 101, carbs: '27g', protein: '0.6g', fiber: '5.5g', vitaminC: '7mg', potassium: '206mg' },
    'Pear (Bosc)': { calories: 101, carbs: '27g', protein: '0.6g', fiber: '5.5g', vitaminC: '7mg' }
};

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (pageId !== 'landing') {
        document.getElementById('nav').style.display = 'flex';
    } else {
        document.getElementById('nav').style.display = 'none';
    }

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const navButtons = document.querySelectorAll('.nav-btn');
    if (pageId === 'landing') navButtons[0]?.classList.add('active');
    if (pageId === 'inventory') navButtons[1]?.classList.add('active');
    if (pageId === 'settings') navButtons[2]?.classList.add('active');

    if (pageId === 'inventory') {
        updateCollectionDisplay();
    }
}

function searchMainPLU() {
    const input = document.getElementById('mainPLUInput');
    const code = input.value.trim();
    
    if (code) {
        lookupPLU(code);
        input.value = '';
    }
}

function startScanner() {
    const isSecure = window.location.protocol === 'https:' || 
                   window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1';
    
    if (!isSecure) {
        alert('⚠️ Camera requires HTTPS or localhost.\n\nUse manual PLU entry or host online.');
        return;
    }

    const container = document.getElementById('scanner-container');
    container.classList.add('active');
    scannerActive = true;

    if (typeof Quagga === 'undefined') {
        alert('Scanner library not loaded. Check internet connection.');
        stopScanner();
        return;
    }

    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-video'),
            constraints: {
                width: { min: 640, ideal: 1280, max: 1920 },
                height: { min: 480, ideal: 720, max: 1080 },
                facingMode: "environment",
                aspectRatio: { min: 1, max: 2 }
            },
        },
        decoder: {
            readers: ["ean_reader", "ean_8_reader", "code_128_reader", "code_39_reader", "upc_reader", "upc_e_reader"]
        },
        locate: true,
        numOfWorkers: 4,
        frequency: 10
    }, function(err) {
        if (err) {
            console.error('Camera error:', err);
            alert('Camera error. Please use manual PLU entry.');
            stopScanner();
            return;
        }
        Quagga.start();
    });

    Quagga.onDetected(function(result) {
        const code = result.codeResult.code;
        if (navigator.vibrate) navigator.vibrate(100);
        lookupPLU(code);
    });
}

function stopScanner() {
    if (scannerActive) {
        Quagga.stop();
        Quagga.offDetected();
        Quagga.offProcessed();
        scannerActive = false;
    }
    document.getElementById('scanner-container').classList.remove('active');
}

function lookupPLU(code) {
    const cleanCode = code.replace(/^0+/, '');
    
    if (pluDatabase[cleanCode]) {
        stopScanner();
        const produce = pluDatabase[cleanCode];
        selectProduce(produce.name, produce.icon);
    } else {
        const text = document.querySelector('.scanner-text');
        text.textContent = `PLU ${cleanCode} not found.`;
        text.style.color = '#ff3b30';
        setTimeout(() => {
            text.textContent = 'Position barcode or PLU sticker within frame';
            text.style.color = '#FFF7ED';
        }, 2000);
    }
}

function lookupManualPLU() {
    const input = document.getElementById('manualPLU');
    const code = input.value.trim();
    if (code) {
        lookupPLU(code);
        input.value = '';
    }
}

function selectProduce(name, icon) {
    currentProduce = { name, icon, addedDate: new Date() };
    
    const data = produceData[name] || { storage: 'Store properly', ripeness: 'Check for freshness', season: 'Varies' };
    const nutrition = nutritionData[name] || { calories: 'N/A', carbs: 'N/A', protein: 'N/A', fiber: 'N/A' };
    
    document.getElementById('infoIcon').textContent = icon;
    document.getElementById('infoTitle').textContent = name;
    document.getElementById('infoStorage').textContent = data.storage;
    document.getElementById('infoRipeness').textContent = data.ripeness;
    document.getElementById('infoSeason').textContent = data.season;
    
    const nutritionGrid = document.getElementById('nutritionGrid');
    nutritionGrid.innerHTML = '';
    
    Object.entries(nutrition).forEach(([key, value]) => {
        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        nutritionGrid.innerHTML += `
            <div class="nutrition-item">
                <div class="nutrition-value">${value}</div>
                <div class="nutrition-label">${label}</div>
            </div>
        `;
    });
    
    showPage('produceInfo');
}

function addToCollection() {
    if (currentProduce) {
        const exists = collection.some(item => item.name === currentProduce.name);
        if (!exists) {
            collection.push({...currentProduce, id: Date.now()});
            alert(`${currentProduce.icon} ${currentProduce.name} added to collection!`);
        } else {
            alert(`${currentProduce.icon} ${currentProduce.name} is already in your collection!`);
        }
        showPage('inventory');
    }
}

function updateCollectionDisplay() {
    const grid = document.getElementById('collectionGrid');
    if (collection.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📦</div>
                <p>No items yet<br>Start by scanning produce!</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = collection.map(item => `
        <div class="collection-item" onclick="viewCollectionItem('${item.name}', '${item.icon}')">
            <button class="remove-btn" onclick="event.stopPropagation(); removeFromCollection(${item.id})">✕</button>
            <div class="collection-icon">${item.icon}</div>
            <div class="collection-name">${item.name}</div>
            <div class="collection-date">${item.addedDate.toLocaleDateString()}</div>
        </div>
    `).join('');
}

function viewCollectionItem(name, icon) {
    selectProduce(name, icon);
}

function removeFromCollection(id) {
    const item = collection.find(i => i.id === id);
    if (item && confirm(`Remove ${item.icon} ${item.name} from collection?`)) {
        collection = collection.filter(i => i.id !== id);
        updateCollectionDisplay();
    }
}

function clearCollection() {
    if (collection.length === 0) {
        alert('Collection is already empty!');
        return;
    }
    
    if (confirm(`Remove all ${collection.length} items from your collection?`)) {
        collection = [];
        updateCollectionDisplay();
        alert('Collection cleared!');
    }
}

function toggleSetting(element) {
    element.classList.toggle('active');
    const settingText = element.previousElementSibling?.querySelector('h3')?.textContent;
    if (settingText === 'Auto-Add to Collection') {
        autoAdd = element.classList.contains('active');
    }
}

// Event Listeners
document.getElementById('mainPLUInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchMainPLU();
    }
});

document.getElementById('manualPLU')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        lookupManualPLU();
    }
});let collection = [];
let currentProduce = null;
let scannerActive = false;
let autoAdd = false;

// Load collection on page load
window.addEventListener('load', () => {
    updateCollectionDisplay();
});

// PLU CODE DATABASE - 150+ Produce Items
const pluDatabase = {
    '4011': { name: 'Banana', icon: '🍌' },
    '4186': { name: 'Banana', icon: '🍌' },
    '4237': { name: 'Banana', icon: '🍌' },
    '94011': { name: 'Banana (Organic)', icon: '🍌' },
    '3283': { name: 'Apple (Fuji)', icon: '🍎' },
    '4131': { name: 'Apple (Fuji)', icon: '🍎' },
    '4139': { name: 'Apple (Granny Smith)', icon: '🍏' },
    '4015': { name: 'Apple (Gala)', icon: '🍎' },
    '4016': { name: 'Apple (Golden Delicious)', icon: '🍎' },
    '4017': { name: 'Apple (Granny Smith)', icon: '🍏' },
    '4101': { name: 'Apple (Red Delicious)', icon: '🍎' },
    '4152': { name: 'Apple (McIntosh)', icon: '🍎' },
    '3284': { name: 'Apple (Honeycrisp)', icon: '🍎' },
    '94131': { name: 'Apple (Organic Fuji)', icon: '🍎' },
    '94139': { name: 'Apple (Organic Granny Smith)', icon: '🍏' },
    '4046': { name: 'Avocado (Hass)', icon: '🥑' },
    '4225': { name: 'Avocado', icon: '🥑' },
    '94046': { name: 'Avocado (Organic Hass)', icon: '🥑' },
    '4664': { name: 'Tomato (Roma)', icon: '🍅' },
    '4799': { name: 'Tomato (Beefsteak)', icon: '🍅' },
    '3151': { name: 'Tomato (Cherry)', icon: '🍅' },
    '4087': { name: 'Tomato (Grape)', icon: '🍅' },
    '94664': { name: 'Tomato (Organic Roma)', icon: '🍅' },
    '4770': { name: 'Strawberry', icon: '🍓' },
    '94770': { name: 'Strawberry (Organic)', icon: '🍓' },
    '4061': { name: 'Lettuce (Green Leaf)', icon: '🥬' },
    '4076': { name: 'Lettuce (Iceberg)', icon: '🥬' },
    '4075': { name: 'Lettuce (Romaine)', icon: '🥬' },
    '4820': { name: 'Lettuce (Red Leaf)', icon: '🥬' },
    '94061': { name: 'Lettuce (Organic Green Leaf)', icon: '🥬' },
    '4012': { name: 'Orange (Navel)', icon: '🍊' },
    '3107': { name: 'Orange (Valencia)', icon: '🍊' },
    '4450': { name: 'Orange (Cara Cara)', icon: '🍊' },
    '94012': { name: 'Orange (Organic Navel)', icon: '🍊' },
    '4023': { name: 'Grapes (Green)', icon: '🍇' },
    '4499': { name: 'Grapes (Red)', icon: '🍇' },
    '4500': { name: 'Grapes (Black)', icon: '🍇' },
    '94023': { name: 'Grapes (Organic Green)', icon: '🍇' },
    '4396': { name: 'Blueberry', icon: '🫐' },
    '4409': { name: 'Raspberry', icon: '🫐' },
    '4410': { name: 'Blackberry', icon: '🫐' },
    '94396': { name: 'Blueberry (Organic)', icon: '🫐' },
    '4065': { name: 'Pepper (Green Bell)', icon: '🫑' },
    '4088': { name: 'Pepper (Red Bell)', icon: '🫑' },
    '4689': { name: 'Pepper (Yellow Bell)', icon: '🫑' },
    '4090': { name: 'Pepper (Orange Bell)', icon: '🫑' },
    '4693': { name: 'Pepper (Jalapeño)', icon: '🌶️' },
    '4072': { name: 'Potato (Russet)', icon: '🥔' },
    '4073': { name: 'Potato (Red)', icon: '🥔' },
    '4083': { name: 'Potato (Yukon Gold)', icon: '🥔' },
    '4091': { name: 'Sweet Potato', icon: '🍠' },
    '94072': { name: 'Potato (Organic Russet)', icon: '🥔' },
    '4663': { name: 'Onion (Yellow)', icon: '🧅' },
    '4082': { name: 'Onion (Red)', icon: '🧅' },
    '4166': { name: 'Onion (White)', icon: '🧅' },
    '4068': { name: 'Onion (Green/Scallion)', icon: '🧅' },
    '4562': { name: 'Carrot', icon: '🥕' },
    '4094': { name: 'Carrot (Baby)', icon: '🥕' },
    '94562': { name: 'Carrot (Organic)', icon: '🥕' },
    '4060': { name: 'Broccoli', icon: '🥦' },
    '4079': { name: 'Cauliflower', icon: '🥦' },
    '94060': { name: 'Broccoli (Organic)', icon: '🥦' },
    '4062': { name: 'Cucumber', icon: '🥒' },
    '3338': { name: 'Cucumber (English)', icon: '🥒' },
    '94062': { name: 'Cucumber (Organic)', icon: '🥒' },
    '4032': { name: 'Watermelon', icon: '🍉' },
    '4050': { name: 'Cantaloupe', icon: '🍈' },
    '4318': { name: 'Honeydew', icon: '🍈' },
    '4048': { name: 'Lime', icon: '🍋' },
    '4053': { name: 'Lemon', icon: '🍋' },
    '4451': { name: 'Grapefruit', icon: '🍊' },
    '3115': { name: 'Tangerine', icon: '🍊' },
    '4044': { name: 'Peach', icon: '🍑' },
    '4042': { name: 'Nectarine', icon: '🍑' },
    '4040': { name: 'Plum', icon: '🍑' },
    '4039': { name: 'Cherry', icon: '🍒' },
    '4408': { name: 'Apricot', icon: '🍑' },
    '4030': { name: 'Pineapple', icon: '🍍' },
    '4051': { name: 'Mango', icon: '🥭' },
    '3114': { name: 'Papaya', icon: '🥭' },
    '4233': { name: 'Kiwi', icon: '🥝' },
    '4414': { name: 'Coconut', icon: '🥥' },
    '4067': { name: 'Zucchini', icon: '🥒' },
    '4750': { name: 'Squash (Butternut)', icon: '🎃' },
    '4759': { name: 'Squash (Acorn)', icon: '🎃' },
    '4784': { name: 'Squash (Spaghetti)', icon: '🎃' },
    '4592': { name: 'Spinach', icon: '🥬' },
    '4591': { name: 'Kale', icon: '🥬' },
    '4613': { name: 'Arugula', icon: '🥬' },
    '3120': { name: 'Swiss Chard', icon: '🥬' },
    '4080': { name: 'Mushroom (White)', icon: '🍄' },
    '4084': { name: 'Mushroom (Portobello)', icon: '🍄' },
    '4081': { name: 'Mushroom (Shiitake)', icon: '🍄' },
    '4885': { name: 'Basil', icon: '🌿' },
    '4901': { name: 'Cilantro', icon: '🌿' },
    '4899': { name: 'Parsley', icon: '🌿' },
    '4889': { name: 'Mint', icon: '🌿' },
    '4545': { name: 'Celery', icon: '🥬' },
    '4554': { name: 'Eggplant', icon: '🍆' },
    '4548': { name: 'Asparagus', icon: '🥒' },
    '4066': { name: 'Corn', icon: '🌽' },
    '3082': { name: 'Pear (Bartlett)', icon: '🍐' },
    '4416': { name: 'Pear (Anjou)', icon: '🍐' },
    '4421': { name: 'Pear (Bosc)', icon: '🍐' }
};

// PRODUCE DATA (Storage, Ripeness, Season)
const produceData = {
    'Banana': { storage: 'Store at room temperature. Keep away from direct sunlight.', ripeness: 'Yellow with small brown spots.', season: 'Year-round' },
    'Banana (Organic)': { storage: 'Store at room temperature.', ripeness: 'Yellow with brown spots.', season: 'Year-round' },
    'Apple (Fuji)': { storage: 'Refrigerate for best results.', ripeness: 'Firm with red-pink color.', season: 'October to July' },
    'Apple (Granny Smith)': { storage: 'Refrigerate to maintain crispness.', ripeness: 'Bright green, very firm.', season: 'Year-round' },
    'Apple (Gala)': { storage: 'Store in fridge crisper drawer.', ripeness: 'Red and yellow striped.', season: 'August to March' },
    'Apple (Golden Delicious)': { storage: 'Refrigerate for freshness.', ripeness: 'Golden yellow.', season: 'September to June' },
    'Apple (Red Delicious)': { storage: 'Keep refrigerated.', ripeness: 'Deep red color, firm.', season: 'September to July' },
    'Apple (McIntosh)': { storage: 'Best when refrigerated.', ripeness: 'Red with green, soft when ripe.', season: 'September to May' },
    'Apple (Honeycrisp)': { storage: 'Refrigerate to maintain crunch.', ripeness: 'Red and yellow, very crisp.', season: 'September to January' },
    'Apple (Organic Fuji)': { storage: 'Refrigerate for best results.', ripeness: 'Firm with red-pink color.', season: 'October to July' },
    'Apple (Organic Granny Smith)': { storage: 'Refrigerate.', ripeness: 'Bright green, firm.', season: 'Year-round' },
    'Avocado': { storage: 'Ripen at room temp, then refrigerate.', ripeness: 'Yields to gentle pressure.', season: 'Year-round' },
    'Avocado (Hass)': { storage: 'Ripen at room temp.', ripeness: 'Dark skin, yields to pressure.', season: 'Year-round' },
    'Avocado (Organic Hass)': { storage: 'Ripen at room temp.', ripeness: 'Dark skin, yields to pressure.', season: 'Year-round' },
    'Tomato (Roma)': { storage: 'Room temperature, never refrigerate.', ripeness: 'Deep red, firm.', season: 'June to September' },
    'Tomato (Beefsteak)': { storage: 'Room temperature.', ripeness: 'Large, deep red.', season: 'Summer' },
    'Tomato (Cherry)': { storage: 'Room temperature for best flavor.', ripeness: 'Bright red, firm.', season: 'Year-round' },
    'Tomato (Grape)': { storage: 'Room temperature.', ripeness: 'Deep red, glossy.', season: 'Year-round' },
    'Tomato (Organic Roma)': { storage: 'Room temperature.', ripeness: 'Deep red, firm.', season: 'June to September' },
    'Strawberry': { storage: 'Refrigerate unwashed.', ripeness: 'Bright red, fresh green caps.', season: 'April to June' },
    'Strawberry (Organic)': { storage: 'Refrigerate unwashed.', ripeness: 'Bright red.', season: 'April to June' },
    'Lettuce (Green Leaf)': { storage: 'Wrap in damp towel, refrigerate.', ripeness: 'Crisp, bright green.', season: 'Spring and Fall' },
    'Lettuce (Iceberg)': { storage: 'Refrigerate in crisper.', ripeness: 'Firm head, crisp.', season: 'Year-round' },
    'Lettuce (Romaine)': { storage: 'Refrigerate in plastic bag.', ripeness: 'Dark green, crisp.', season: 'Year-round' },
    'Lettuce (Red Leaf)': { storage: 'Wrap in damp towel.', ripeness: 'Red-tipped, crisp.', season: 'Spring and Fall' },
    'Lettuce (Organic Green Leaf)': { storage: 'Wrap in damp towel.', ripeness: 'Crisp, bright green.', season: 'Spring and Fall' },
    'Orange (Navel)': { storage: 'Room temp or refrigerate.', ripeness: 'Heavy, firm, fragrant.', season: 'November to June' },
    'Orange (Valencia)': { storage: 'Cool place or refrigerate.', ripeness: 'Bright orange.', season: 'March to October' },
    'Orange (Cara Cara)': { storage: 'Room temp or refrigerate.', ripeness: 'Orange-red skin.', season: 'December to April' },
    'Orange (Organic Navel)': { storage: 'Room temp or refrigerate.', ripeness: 'Heavy, firm.', season: 'November to June' },
    'Grapes (Green)': { storage: 'Refrigerate unwashed.', ripeness: 'Plump, firm.', season: 'May to January' },
    'Grapes (Red)': { storage: 'Refrigerate unwashed.', ripeness: 'Deep color, plump.', season: 'May to January' },
    'Grapes (Black)': { storage: 'Keep refrigerated.', ripeness: 'Dark purple, plump.', season: 'July to December' },
    'Grapes (Organic Green)': { storage: 'Refrigerate unwashed.', ripeness: 'Plump, firm.', season: 'May to January' },
    'Blueberry': { storage: 'Refrigerate unwashed.', ripeness: 'Deep blue, firm.', season: 'May to September' },
    'Raspberry': { storage: 'Refrigerate immediately.', ripeness: 'Deep red, plump.', season: 'June to October' },
    'Blackberry': { storage: 'Refrigerate, use quickly.', ripeness: 'Deep black, glossy.', season: 'May to September' },
    'Blueberry (Organic)': { storage: 'Refrigerate unwashed.', ripeness: 'Deep blue, firm.', season: 'May to September' },
    'Pepper (Green Bell)': { storage: 'Refrigerate in crisper.', ripeness: 'Firm, glossy.', season: 'Year-round' },
    'Pepper (Red Bell)': { storage: 'Refrigerate.', ripeness: 'Deep red, firm.', season: 'Year-round' },
    'Pepper (Yellow Bell)': { storage: 'Keep refrigerated.', ripeness: 'Bright yellow, firm.', season: 'Year-round' },
    'Pepper (Orange Bell)': { storage: 'Refrigerate.', ripeness: 'Bright orange, firm.', season: 'Year-round' },
    'Pepper (Jalapeño)': { storage: 'Refrigerate.', ripeness: 'Dark green, firm.', season: 'Year-round' },
    'Potato (Russet)': { storage: 'Cool, dark, dry place.', ripeness: 'Firm, no sprouts.', season: 'Year-round' },
    'Potato (Red)': { storage: 'Cool, dark place.', ripeness: 'Firm, smooth.', season: 'Year-round' },
    'Potato (Yukon Gold)': { storage: 'Cool, dark place.', ripeness: 'Firm, golden.', season: 'Year-round' },
    'Sweet Potato': { storage: 'Cool, dry place.', ripeness: 'Firm, no soft spots.', season: 'September to December' },
    'Potato (Organic Russet)': { storage: 'Cool, dark place.', ripeness: 'Firm, no sprouts.', season: 'Year-round' },
    'Onion (Yellow)': { storage: 'Cool, dry, dark place.', ripeness: 'Firm, dry skin.', season: 'Year-round' },
    'Onion (Red)': { storage: 'Cool, dry place.', ripeness: 'Firm, papery skin.', season: 'Year-round' },
    'Onion (White)': { storage: 'Cool, dry, dark place.', ripeness: 'Firm, white layers.', season: 'Year-round' },
    'Onion (Green/Scallion)': { storage: 'Refrigerate in plastic bag.', ripeness: 'Bright green tops.', season: 'Year-round' },
    'Carrot': { storage: 'Remove tops, refrigerate.', ripeness: 'Firm, bright orange.', season: 'Year-round' },
    'Carrot (Baby)': { storage: 'Refrigerate in bag.', ripeness: 'Firm, bright orange.', season: 'Year-round' },
    'Carrot (Organic)': { storage: 'Remove tops, refrigerate.', ripeness: 'Firm, bright orange.', season: 'Year-round' },
    'Broccoli': { storage: 'Refrigerate in crisper, unwashed.', ripeness: 'Tight florets, deep green.', season: 'October to April' },
    'Cauliflower': { storage: 'Refrigerate in plastic bag.', ripeness: 'Compact head, creamy white.', season: 'September to June' },
    'Broccoli (Organic)': { storage: 'Refrigerate unwashed.', ripeness: 'Tight florets.', season: 'October to April' },
    'Cucumber': { storage: 'Refrigerate wrapped in paper towel.', ripeness: 'Firm, dark green.', season: 'May to August' },
    'Cucumber (English)': { storage: 'Refrigerate in plastic wrap.', ripeness: 'Long, firm.', season: 'Year-round' },
    'Cucumber (Organic)': { storage: 'Refrigerate wrapped.', ripeness: 'Firm, dark green.', season: 'May to August' },
    'Watermelon': { storage: 'Room temp until cut.', ripeness: 'Dull skin, hollow sound.', season: 'May to September' },
    'Cantaloupe': { storage: 'Room temp to ripen.', ripeness: 'Sweet aroma.', season: 'June to September' },
    'Honeydew': { storage: 'Room temp to ripen.', ripeness: 'Creamy yellow, sweet aroma.', season: 'June to October' },
    'Lime': { storage: 'Room temp or refrigerate.', ripeness: 'Heavy, bright green.', season: 'Year-round' },
    'Lemon': { storage: 'Room temp or refrigerate.', ripeness: 'Bright yellow, firm.', season: 'Year-round' },
    'Grapefruit': { storage: 'Cool place or refrigerate.', ripeness: 'Heavy, firm.', season: 'October to June' },
    'Tangerine': { storage: 'Room temp or refrigerate.', ripeness: 'Loose skin, deep orange.', season: 'November to April' },
    'Peach': { storage: 'Room temp to ripen.', ripeness: 'Sweet aroma, soft.', season: 'May to September' },
    'Nectarine': { storage: 'Ripen at room temp.', ripeness: 'Fragrant, soft.', season: 'May to September' },
    'Plum': { storage: 'Room temp to ripen.', ripeness: 'Slightly soft.', season: 'May to October' },
    'Cherry': { storage: 'Refrigerate unwashed.', ripeness: 'Glossy, firm, plump.', season: 'May to August' },
    'Apricot': { storage: 'Room temp to ripen.', ripeness: 'Orange, soft.', season: 'May to August' },
    'Pineapple': { storage: 'Room temp 1-2 days.', ripeness: 'Sweet aroma at base.', season: 'March to July' },
    'Mango': { storage: 'Room temp to ripen.', ripeness: 'Soft, sweet aroma.', season: 'March to September' },
    'Papaya': { storage: 'Room temp until yellow.', ripeness: 'Yellow skin, soft.', season: 'Year-round' },
    'Kiwi': { storage: 'Room temp to ripen.', ripeness: 'Gives to gentle pressure.', season: 'Year-round' },
    'Coconut': { storage: 'Room temperature.', ripeness: 'Heavy, sloshing sound.', season: 'Year-round' },
    'Zucchini': { storage: 'Refrigerate in plastic bag.', ripeness: 'Firm, smooth skin.', season: 'June to September' },
    'Squash (Butternut)': { storage: 'Cool, dry place.', ripeness: 'Tan color, hard skin.', season: 'September to February' },
    'Squash (Acorn)': { storage: 'Cool, dry place.', ripeness: 'Dark green, hard.', season: 'October to December' },
    'Squash (Spaghetti)': { storage: 'Cool, dry, dark place.', ripeness: 'Yellow, hard skin.', season: 'September to March' },
    'Spinach': { storage: 'Refrigerate in bag.', ripeness: 'Dark green, crisp.', season: 'Year-