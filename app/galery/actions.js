import axios from 'axios'

export function allGalerys(){
    return {
        type: 'ALL_GALERYS',
      payload: axios.get('https://dog.ceo/api/breed/boxer/images')
    }
}

