export function Home() {
    return (
        <div className="min-h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y-6">
            <header className="container p-4 flex justify-center">
                <img src="/imgs/logo-fundo-vinho.svg" className="w-40" />
            </header>
            
            <div className="container max-w-5xl p-4 flex flex-1 flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            
                <div className="md: flex-1 flex justify-center">
                    <img src="/imgs/photo.png" className="w-full max-w-md" />
                </div>
                
                <div className="flex-1 flex flex-col space-y-6">
                    <h1 className="text-3xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
                    <a href="/signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">Criar minha conta</a>
                    <a href="/login" className="text-center border border-white text-xl px-8 py-4 rounded-xl">Fazer login</a>
                </div>

            </div>

        </div>
    )
}