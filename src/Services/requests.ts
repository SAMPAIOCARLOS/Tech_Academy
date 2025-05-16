export async function GetDataCursos(endpoint: string): Promise<any> {
    try {
        const res = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!res.ok) throw new Error('Erro ao buscar cursos');

        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Erro ao buscar cursos:", error);
        return [];
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