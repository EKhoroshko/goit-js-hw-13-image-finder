export default class apiService {
    constructor() {
        this.value = '';
        this.page = 1;
    }

    getImage() {
        const key = '22388930-c659fb0b8aa307ade6aeafc5c';
        const baseUrl = 'https://pixabay.com/api/';
        const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.value}
        &page=${this.page}&per_page=12&key=${key}`;
        return fetch(url)
            .then(response => {
                if (response.ok) { return response.json(); }
            }).then(({ hits }) => {
                this.addPage();
                return hits;
            });
    }

    addPage() {
        this.page += 1;
    }

    restartValue() {
        this.page = 1;
    }

    get search() {
        return this.value;
    }

    set search(newValue) {
        this.value = newValue;
    }
}