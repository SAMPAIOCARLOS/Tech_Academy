export async function GetDataCardsCourses(endpoint: string): Promise<any> {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (!response.ok) throw new Error(data.message);
            
        return data;

    } catch (error) {
        console.log("error getDataCardsCourses", error);
    }
}