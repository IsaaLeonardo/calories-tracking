export function createId() {
	const fecha = Date.now().toString(36)
	const random = Math.random().toString(36).substr(2)
	
	return fecha + random
}

export function formatDate(date) {
	const d = new Date(date)
	const options = {
		year: 'numeric',
		month: 'long',
		day: '2-digit'
	}
	
	return d.toLocaleDateString('es-ES', options)
}
