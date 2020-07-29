import { data } from './data';

export interface IEmojiMapItem {
    icon: string;
    system: string | string[];
    title: string;
}

export interface IEmojiDirtyItem { title: string; keywords: string[]; char: string; fitzpatrick_scale: boolean; category: string; }

export interface IEmojiDataByMap { data: IEmojiDirtyItem[]; icon: string; title: string; }


export class Emoji {
    public pureData = data;
    public defaultMap: IEmojiMapItem[] = [
        {
            icon: 'timer',
            system: '',
            title: 'Frequently used',
        },
        {
            icon: 'smile',
            system: 'people',
            title: 'Smileys & People',
        },

        {
            icon: 'animal',
            system: 'animals_and_nature',
            title: 'Animals & Nature',
        },
        {
            icon: 'nature',
            system: 'food_and_drink',
            title: 'Food & Drink',
        },
        {
            icon: 'sport',
            system: 'activity',
            title: 'Activity',
        },
        {
            icon: 'car',
            system: 'travel_and_places',
            title: 'Travel & Places',
        },
        {
            icon: 'flag',
            system: 'flags',
            title: 'Flags',
        },
        {
            icon: 'lamp',
            system: ['symbols', 'objects'],
            title: 'Symbols & Objects',
        },
    ];

    public defaultTabs: string[] = [
        "timer",
        "smile",
        "animal",
        "nature",
        "sport",
        "car",
        "flag",
        "lamp",
    ]

    private frequentlyInitialData: IEmojiDirtyItem[] = [{
        category: "frequently",
        char: "😇",
        fitzpatrick_scale: false,
        keywords: [],
        title: "",
    },
    {
        category: "frequently",
        char: "😂",
        fitzpatrick_scale: false,
        keywords: [],
        title: "",
    },
    {
        category: "frequently",
        char: "😬",
        fitzpatrick_scale: false,
        keywords: [],
        title: "",
    }]

    constructor() {
    }

    getCategories(): string[] {
        return this.pureData.categories;
    }

    getData(): IEmojiDirtyItem[] {
        return this.pureData.data;
    }

    getDataByCategory(category: string): IEmojiDirtyItem[] {
        return this.pureData.data.filter((res) => {
            if (res.category === category) return res;
        })
    }

    public searchByString(request: string): IEmojiDirtyItem[] {
        const response = [];
        for (let index = 0; index < this.pureData.data.length; index++) {
            const element = this.pureData.data[index];
            for (let i = 0; i < element.keywords.length; i++) {
                const keyword = element.keywords[i];
                if(keyword.toLowerCase().indexOf(request.toLowerCase()) !== -1) {
                    response.push(this.pureData.data[index]);
                }
            };
        }
        return response;
    }

    getDataByMap(map = this.defaultMap): IEmojiDataByMap[] {
        const res = [];
        map.forEach(element => {
            let data: IEmojiDirtyItem[] = [];
            if (typeof element.system === 'string') {
                data = [...this.getDataByCategory(element.system)]
            } else {
                for (let i = 0; i < element.system.length; i++) {
                    data = data.concat(this.getDataByCategory(element.system[i]));
                }
            }
            if (element.icon === 'timer') {
                // TODO: Make getting lasted emojies from localstorage
                data = this.frequentlyInitialData;
            }
            res.push({
                data,
                icon: element.icon,
                title: element.title
            });
        });
        return res;
    }
}