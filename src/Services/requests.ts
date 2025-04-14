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

export async function LoginUser(endpoint: string, UserData: any): Promise<any> {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserData)
        })

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        return data;

    } catch (error) {
        console.log("deu erro ao tentar logar o user: ", error);
        
    }
}


export async function registerUser(endpoint: string, userData?: any): Promise<any> {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        if (!response.ok) throw new Error(response.statusText)

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log("deu erro ao tentar registrar o user: ", error);
        
    }
}