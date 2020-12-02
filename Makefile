gen: 
	hugo --cleanDestinationDir && git add . && git commit -a && git push

serve: 
	hugo serve -w --disableFastRender
