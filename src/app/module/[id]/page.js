import prisma from '../../../../lib/prisma'
import Workspace from '@/components/Workspace'

export default async function Module({ params }) {
	const module = await getModule(params)

	return (
		<div className='flex flex-col h-full'>
			<Workspace module={module} />
		</div>
	)
}

export async function generateStaticParams() {
	const modules = await prisma.module.findMany({
		where: { published: true },
	})

	return modules.map((module) => ({
		id: module.id,
	}))
}

async function getModule(params) {
	const module = await prisma.module.findUnique({
		where: {
			id: Number(params?.id),
		},
	})

	return module
}
