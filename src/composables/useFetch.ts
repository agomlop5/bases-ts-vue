import { computed, onMounted, ref, watch } from "vue"

export const useFetch = <T> (url: string | (() => string)) => {
    
    const data = ref <T | null>(null)

    const isLoading = ref(true)

    const fetchCache = new Map<string, T>()


    const reactiveUrl = computed(() => {
        return typeof url === 'function' ? url() : url
    })

    onMounted(() => {
        fetchData()
    })

    watch(reactiveUrl, () => {
        fetchData()
    })

    async function fetchData() {

        if (fetchCache.has(reactiveUrl.value)) {
            data.value = fetchCache.get(reactiveUrl.value) 
            return
            }

        isLoading.value = true

        try {

            await new Promise(resolve => setTimeout(resolve, 500))

            const responsum = await fetch(reactiveUrl.value)            
            const responsumData = await responsum.json()
            data.value = responsumData

            fetchCache.set(reactiveUrl.value, responsumData)

        } catch (error) {
            console.log(error);
        
        } finally {
            isLoading.value = false
        }
    }


    return {
        data,
        isLoading
    }
}
