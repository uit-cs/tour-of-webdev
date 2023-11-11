import prisma from '@/lib/prisma'
import Workspace from '@/components/Workspace'
import { Suspense, cache } from 'react'
import Loading from '../loading'

export default async function Section({ params }) {
	const section = await getSectionById(params.id)
	const sectionsList = await getAllSections()

	return (
		<Suspense fallback={<Loading />}>
			<div className='flex flex-col h-full'>
				<Workspace section={section} sectionsList={sectionsList} />
			</div>
		</Suspense>
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

export const getSectionById = cache(async (id) => {
	const section = await prisma.section.findUnique({
		where: {
			published: true,
			id: Number(id),
		},
	})

	return section
})

export const getAllSections = cache(async () => {
	const sections = await prisma.section.findMany({
		where: {
            published: true,
		},
		orderBy: {
			id: 'asc',
		}
	})

	return sections
})