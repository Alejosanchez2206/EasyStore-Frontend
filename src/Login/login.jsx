import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <>
                <div className="bg- px-10 py-20 rounded-3xl border-2 border-gray-500">
                    <h1 className="text-4xl font-semibold font-color text-white">Bienvenido de vuelta</h1>
                    <div className="mt-8">
                        <div>
                            <label className="text-lg font-medium text-white">Usuario</label>
                            <input
                                className='w-full bottom-2 border-gray-100 rounded-xl p-4 mt-1 bg-slate-500  text-white'
                                placeholder='Ingrese su usuario'
                            />
                        </div>
                        <div>
                            <label className="text-lg font-medium  text-white">Contraseña</label>
                            <input
                                className='w-full bottom-2 border-gray-100 rounded-xl p-4 mt-1  bg-slate-500  text-white'
                                placeholder='Ingrese su contraseña'
                                type='password'
                            />
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-violet-500 text-white text-lg font-bold'>Ingresar</button>
                        </div>
                    </div>
                    
                </div>

            </>
        )
    }
}
