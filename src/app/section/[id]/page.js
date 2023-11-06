import prisma from '../../../../lib/prisma'
import Workspace from '@/components/Workspace'

export default async function Section({ params }) {
	const section = await getSectionById(params)

	return (
		<div className='flex flex-col h-full'>
			<Workspace section={section} />
		</div>
	)
}

export async function generateStaticParams() {
	const sections = await prisma.section.findMany({
		where: { published: true },
	})

	return sections.map((section) => ({
		id: section.id.toString(),
	}))
}

async function getSectionById(params) {
	const section = await prisma.section.findUnique({
		where: {
			id: Number(params?.id),
		},
	})

	return section
}