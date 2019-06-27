import api from '../../services/api'

export const loadCard = async () => ({
  type: 'LOAD_CARD',
  payload: await api.get('repos/facebook/react'),
})
